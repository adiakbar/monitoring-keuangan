let app = new Vue({
  el: '#app',
  data: {
    section1: '',
    section1a: '',
    section2a: '',
    section2b: '',
    section2c: '',
    section3: '',
    section4: ''
  },
  methods: {
    startInterval: function() {
      let self = this;
      setInterval(function() {
        axios.get('https://stormy-brushlands-62293.herokuapp.com/api?id=1cmayAQ-yL84zAZMI2c1R-MiEvLK_8CjKrP05qg620Jo&sheet=1')
          .then(response => {
            self.section1 = response.data.rows.slice(0,4)
            self.section1a = response.data.rows.slice(4,10)
          })
        axios.get('https://stormy-brushlands-62293.herokuapp.com/api?id=1cmayAQ-yL84zAZMI2c1R-MiEvLK_8CjKrP05qg620Jo&sheet=2')
          .then(response => {
            self.section2a = response.data.rows.slice(0, 7)
            self.section2b = response.data.rows.slice(7, 15)
            self.section2c = response.data.rows.slice(15, 22)
          })
        axios.get('https://stormy-brushlands-62293.herokuapp.com/api?id=1cmayAQ-yL84zAZMI2c1R-MiEvLK_8CjKrP05qg620Jo&sheet=5')
          .then(response => {
            console.log(response.data.rows)
            self.section3 = response.data.rows
          })
      }, 1000 * 36 * 2)
    }
  },
  mounted: function() {
    axios.get('https://stormy-brushlands-62293.herokuapp.com/api?id=1cmayAQ-yL84zAZMI2c1R-MiEvLK_8CjKrP05qg620Jo&sheet=1')
      .then(response => {
        console.log(response.data.rows)
        this.section1 = response.data.rows.slice(0,5)
        this.section1a = response.data.rows.slice(5,15)
        // self.section1a = response.data.rows.slice(4,10)
      })
    axios.get('https://stormy-brushlands-62293.herokuapp.com/api?id=1cmayAQ-yL84zAZMI2c1R-MiEvLK_8CjKrP05qg620Jo&sheet=2')
      .then(response => {
        this.section2a = response.data.rows.slice(0, 6)
        this.section2b = response.data.rows.slice(6, 13)
        this.section2c = response.data.rows.slice(13, 20)
      })
    axios.get('https://stormy-brushlands-62293.herokuapp.com/api?id=1cmayAQ-yL84zAZMI2c1R-MiEvLK_8CjKrP05qg620Jo&sheet=5')
      .then(response => {
        // console.log(response.data.rows)
        this.section3 = response.data.rows
      })
    axios.get('https://stormy-brushlands-62293.herokuapp.com/api?id=1cmayAQ-yL84zAZMI2c1R-MiEvLK_8CjKrP05qg620Jo&sheet=4')
      .then(response => {
        console.log(response.data.rows)
        this.section4 = response.data.rows
      })
    this.startInterval();
  }
})

$(document).ready(function() {
  $('#fullpage').fullpage({
    // sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    loopBottom: true,
    // afterRender: function() {
    //   setInterval(function() {
    //     $.fn.fullpage.moveSectionDown();
    //   },50000)
    // }
  });
});

