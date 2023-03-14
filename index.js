const Connector = require('loopback-connector').Connector;

function getError(error) {
  if (error) {
    if (typeof error === "string") {
      return new Error(error);
    }
    return new Error("No datasource is connected to the model");
  }
  return null;
}

class PlaceholderConnector extends Connector {
  constructor(settings) {
    super('placeholder', settings);
  }

  connect(callback) {
    callback();
  }

  disconnect(callback) {
    callback();
  }

  ping(callback) {
    callback();
  }

  create(model, data, callback) {
    const error = getError(this.settings.writeError);
    callback(error, data);
  }

  replaceOrCreate(model, data, callback) {
    const error = getError(this.settings.writeError);
    callback(error, data);
  }

  all(model, filter, callback) {
    const error = getError(this.settings.readError);
    callback(error, []);
  }

  destroyAll(model, where, callback) {
    const error = getError(this.settings.deleteError);
    callback(error, 0);
  }

  count(model, callback, where) {
    const error = getError(this.settings.readError);
    callback(error, 0);
  }

  save(model, id, callback) {
    const error = getError(this.settings.writeError);
    callback(error, []);
  }

  update(model, where, data, callback) {
    const error = getError(this.settings.writeError);
    callback(error, data);
  }

  destroy(model, id, callback) {
    const error = getError(this.settings.deleteError);
    callback(error, 0);
  }

  replaceById(model, id, data, callback) {
    const error = getError(this.settings.writeError);
    callback(error, data);
  }

  updateAttributes(model, id, data, callback) {
    const error = getError(this.settings.writeError);
    callback(error, data);
  }
}

module.exports = PlaceholderConnector;
