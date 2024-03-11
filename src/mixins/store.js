// store.js

import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      isLight: true,
      isDark: false,
    };
  },
  mutations: {
    toggleColor(state) {
      state.isLight = !state.isLight;
      state.isDark = !state.isDark;
    },
    setColorMode(state, { isLight, isDark }) {
      state.isLight = isLight;
      state.isDark = isDark;
    },
  },
  getters: {
    themeClasses(state) {
      return {
        'light-mode': state.isLight,
        'dark-mode': state.isDark,
      };
    },
    themeClassesInversed(state) {
      return {
        'light-mode': state.isDark,
        'dark-mode': state.isLight,
      };
    },
    themeClassesBorder(state) {
      return {
        'border-light': state.isDark,
        'border-dark': state.isLight,
      };
    },
    themeClassesBorderInversed(state) {
      return {
        'border-light': state.isLight,
        'border-dark': state.isDark,
      };
    },
    themeClassesBtn(state) {
      return {
        'button-light': state.isLight,
        'button-dark': state.isDark
      };
    },
    themeClassesBtnInversed(state) {
      return {
        'button-light': state.isDark,
        'button-dark': state.isLight,
      };
    },
    themeClassesBg(state) {
      return {
        'bg-light': state.isLight,
        'bg-dark': state.isDark
      };
    },
    themeClassesColor(state) {
      return {
        'light': state.isLight,
        'dark': state.isDark
      };
    },
    themeClassesPosition(state) {
      return {
        'position-light': state.isLight,
        'position-dark': state.isDark
      };
    },
    themeClassesGithub(state) {
      return {
        'github-light': state.isLight,
        'github-dark': state.isDark
      };
    },
    themeClassesLinkedin(state) {
      return {
        'linkedin-light': state.isLight,
        'linkedin-dark': state.isDark
      };
    },
  },
});
