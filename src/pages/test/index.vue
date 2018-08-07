<template>
    <div>

        <test :text='sayHello'></test>   
    </div>
</template>

<script>
import test from '@/components/test'

export default {
  data () {
    return {
      sayHello: 'hello 小程序'
    }
  },
  components: {
    test
  }
}
</script>

