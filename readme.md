# loopback-connector-placeholder

Placeholder loopback connector for not failing upon application initialization.

## Installation

Add the loopback-connector-placeholder dependency to your project using yarn or npm.

```bash
npm install --save loopback-connector-placeholder
or
yarn add loopback-connector-placeholder
```

### Add Datasource

Add datasource to your datasources.json (or a js file as documented [here](https://loopback.io/doc/en/lb3/Environment-specific-configuration.html#data-source-configuration))

```json
{
    "placeholder": {
        "name": "placeholder",
        "connector": "placeholder",
        "writeError": true,
        "deleteError": true,
        "readError": true
    }
}
```

**writeError**, **deleteError** and **readError** are optional. If set, these parameters can be either ``true`` in which case a default error is thrown on the respective operation, or a ``string`` in which case the error is replaced by the string provided. If they are not set, the response will simulate a success.

> :exclamation: Note that many **write** operations also use **read** operations in the background. So throwing a (custom) error in **read** operations will also be thrown in those **write** operations.

## Licence

[MIT License](./LICENSE)

Copyright (c) Marios Vertopoulos & Vassilis Katsaris