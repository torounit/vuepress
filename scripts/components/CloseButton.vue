<template>
  <button class="CloseButton"
          @click="$emit('click')">
  </button>

</template>


<style scoped lang="stylus" rel="stylesheet/stylus">
  .CloseButton {
    border none;
    background-color: transparent
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    overflow: hidden;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 2px;
      width: 100%;
      top: 50%;
      left: 0;
      margin-top: -1px;
      background: #000;
    }
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);

    }
  }
</style>
