import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/credit/simulator",
      component: () => import("@/view/layout/Layout"),
      children: [
        {
          path: "/credit",
          name: "credit",
          component: () => import("@/view/pages/credit/Vuetify.vue"),
          children: [
            {
              path: "simulator",
              name: "credit-simulator",
              component: () => import("@/view/pages/credit/forms/Simulator.vue")
            },
            {
              path: "customer-information",
              name: "credit-customer-information",
              component: () => import("@/view/pages/credit/forms/CustomerInformation.vue")
            },
            {
              path: "request-form",
              name: "credit-request-form",
              component: () => import("@/view/pages/credit/forms/RequestForm.vue")
            },
            {
              path: "security-code",
              name: "credit-security-code",
              component: () => import("@/view/pages/credit/forms/SecurityCode.vue")
            },
            {
              path: "congrats-step",
              name: "credit-congrats-step",
              component: () => import("@/view/pages/credit/forms/CongratsStep.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/error",
      name: "error",
      component: () => import("@/view/pages/error/Error.vue"),
      children: [
        {
          path: "error-1",
          name: "error-1",
          component: () => import("@/view/pages/error/Error-1.vue")
        }
      ]
    },
    {
      path: "*",
      redirect: "/404"
    },
    {
      // the 404 route, when none of the above matches
      path: "/404",
      name: "404",
      component: () => import("@/view/pages/error/Error-1.vue")
    }
  ]
});
