export default (controls, moment) => {
  let params = {}

  if (controls.source.value) {
      const sourceIdents = { "sourceIdents": controls.source.value };
      params = Object.assign(params, sourceIdents);
  }

  if (controls.status.value) {
    const status = { "status": controls.status.value };
    params = Object.assign(params, status);
  } else {
      params.status ? delete params.status : null;
  }

  if (controls.content.value) {
      let content = { "payload": controls.content.value };
      params = Object.assign(params, content);
  } else {
      params.content ? delete params.content : null;
  }
  
  if (controls.identification.value) {
      let identification = { "id": controls.identification.value };
      params = Object.assign(params, identification);
  } else {
      params.id ? delete params.id : null;
  }

  if (controls.dateInitial.value || controls.dateFinal.value) {
      const includedOnInterval = {
          "includedOnInterval": {
              "init": moment(controls.dateInitial.value),
              "end": moment(controls.dateFinal.value)
          }
      };
      params = Object.assign(params, includedOnInterval);
  } else {
      params.includedOnInterval ? delete params.includedOnInterval : null;
  }
  if (controls.processingInitial.value || controls.processingFinal.value) {
      const lastProcessedOnInterval = {
          "lastProcessedOnInterval": {
              "init": moment(controls.processingInitial.value),
              "end": moment(controls.processingFinal.value)
          }
      };
      params = Object.assign(params, lastProcessedOnInterval);
  } else {
      params.lastProcessedOnInterval ? delete params.lastProcessedOnInterval : null;
  }

  return params
}