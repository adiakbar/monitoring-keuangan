let app = new Vue({
  el: '#app',
  data: {
    section1: '',
    section2a: '',
    section2b: '',
    section2c: '',
    section3: [{},{}]
  },
  mounted: function() {
    axios.get('https://stormy-brushlands-62293.herokuapp.com/api?id=1cmayAQ-yL84zAZMI2c1R-MiEvLK_8CjKrP05qg620Jo&sheet=1')
      .then(response => {
        this.section1 = response.data.rows
      })
    axios.get('https://stormy-brushlands-62293.herokuapp.com/api?id=1cmayAQ-yL84zAZMI2c1R-MiEvLK_8CjKrP05qg620Jo&sheet=2')
      .then(response => {
        this.section2a = response.data.rows.slice(0, 7)
        this.section2b = response.data.rows.slice(7, 15)
        this.section2c = response.data.rows.slice(15, 22)
      })
    axios.get('https://stormy-brushlands-62293.herokuapp.com/api?id=1cmayAQ-yL84zAZMI2c1R-MiEvLK_8CjKrP05qg620Jo&sheet=3')
      .then(response => {
        console.log(response.data.rows)
        this.section3 = response.data.rows
      })
  }
})

$(document).ready(function() {
  $('#fullpage').fullpage({
    // sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    loopBottom: true,
    afterRender: function() {
      setInterval(function() {
        $.fn.fullpage.moveSectionDown();
      },10000)
    }
  });
});

