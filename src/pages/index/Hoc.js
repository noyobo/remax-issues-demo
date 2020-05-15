export default  function HOC(Target) {
  return class H extends Target {
    constructor(props){
      super(props);
      const s = ['onShow', 'onReady'];

      s.forEach((event) => {
        const s = this[event];
        super[event] = (...argv) => {
          console.log(event, 'hoc')
          s && s.apply(this, argv)
        }
      })
      
    }
  }
}