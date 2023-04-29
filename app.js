//
//first step, create vue app
//{} is an object that allows us to configure the app
//data(){...} is short hand for-> data: function(){}
const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Course goal",
      courseGoalA: "Finish the course and learn Vue!",
      courseGoalB: "Master Vue!",
      courseGoalAsHtml: '<h2 style="color: white">Sample html header</h2>',
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal"); //allows us to control certain element by unique id selector
