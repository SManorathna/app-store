export const ApiEndpoints = {
  authentication: {
    login: "./assets/files/login.json",
    logout: "./assets/files/logout.json",
    signup: "./assets/files/sign-up.json",
    changePassword: "./assets/files/sign-up.json"
  },
  apis: {
    search: "./assets/files/apis.json",
    apiOverview: "./assets/files/api-overview.json",
    applications: "./assets/files/application-list.json",
    subscribe: "./assets/files/subscribe.json"
  },
  global: {
    countries:
      "https://raw.githubusercontent.com/pbakondy/mcc-mnc-list/master/mcc-mnc-list.json",
    tiers: "./assets/files/tiers.json"
  },
  applications: {
    getAllApplications: "./assets/files/applications.json",
    getSubscriptions: "./assets/files/subscriptions.json"
  },
  forum: {
    getAllTopics: "./assets/files/all-tpics.json",
    getOneTopic: "./assets/files/one-thread.json",
    deleteTopic: "./assets/files/delete-topic.json",
    create: "./assets/files/create-topic.json"
  }
};
