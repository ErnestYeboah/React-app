const displayComponentsApi = {
  showExpenseTracker: true,
  showCarsCategory: true,
  showForms: true,
};

export default function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (displayComponentsApi) resolve(displayComponentsApi);
    else reject("some error occureed");
  });
}
