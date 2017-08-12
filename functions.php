<?php
/**
 * Components functions and definitions.
 *
 * @package vuepress
 */

if ( ! function_exists( 'vuepress_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 */
	function vuepress_setup() {

		load_theme_textdomain( 'vuepress', get_template_directory() . '/languages' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_editor_style( get_stylesheet_uri() );


		/**
		 * Add support for core custom logo.
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 150,
			'width'       => 150,
			'flex-width'  => true,
			'flex-height' => true,
		) );

		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Indicate widget sidebars can use selective refresh in the Customizer.
		add_theme_support( 'customize-selective-refresh-widgets' );
	}
endif;
add_action( 'after_setup_theme', 'vuepress_setup' );


/**
 * Enqueue scripts and styles.
 */
function vuepress_scripts() {
	global $wp_rewrite;
	$theme   = wp_get_theme( get_template() );
	$version = $theme->get( 'Version' );
	wp_enqueue_script( 'vuepress-script', get_template_directory_uri() . '/bundle.js', array(
		'jquery',
		'underscore',
	), $version, true );
	wp_localize_script(
		'vuepress-script',
		'WPSettings',
		[
			'root' => esc_url_raw( rest_url() ),
			'nonce' => wp_create_nonce( 'wp_rest' ),
			'date_permastruct' => $wp_rewrite->get_date_permastruct(),
			'page_on_front' => get_option('page_on_front'),
			'page_for_posts' => get_option('page_for_posts'),
			'category_base' => get_option('category_base') ? get_option('category_base') : 'category',
			'tag_base'      => get_option('tag_base') ? get_option('tag_base') : 'tag'
		]
	);
}

add_action( 'wp_enqueue_scripts', 'vuepress_scripts' );


add_action( 'rest_api_init', function () {

	register_rest_route( 'vuepress/v1', '/post/(?P<url>.*)', array(
		'methods'  => 'GET',
		'callback' => function ( $request ) {
			$post_id = url_to_postid( $request['url'] );
			if ( ! $post_id ) {
				return [];
			}

			$post          = get_post( $post_id );
			$post_type     = get_post_type_object( $post->post_type );
			$request['id'] = $post_id;
			$response      = new WP_REST_Posts_Controller( $post->post_type );

			return $response->get_item( $request );
		}
	) );
} );


