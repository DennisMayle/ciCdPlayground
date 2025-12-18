import App from "./App.svelte";

new App({
  target: document.body,
  props: {
    // What's your name?
    name: "Dennis Mayle",
    // In the following fiels you can either give a single string,
    // or an array of bullet points

    // What do you associate with the term 'CI/CD'?
    associations: ["Continous integration and develelopment. Automatically building and testing the poject regularly"],
    // Which CI/CD tools do you use in your project?
    tools: "Jenkins",
    // What do you want to learn in this workshop?
    expectations: ["Understand and learn how to use Jenkins optimaly. Maybe learning good practices for setting up one pipelines"],
  },
});
