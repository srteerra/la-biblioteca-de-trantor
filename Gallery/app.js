// Initialize Vue
new Vue({
    // Vue elementor
    el: '#app',
  
    // General data (access with "this.[value]")
    data () {
      return {
        slide: 0,
        sliding: null
      }
    },
  
    // Actions pre-ordered
    computed: {
    
    },
  
    // Events triggers
    watch: {
    
    },
  
    // Functions to call
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
          this.sliding = false
      }
    }
})