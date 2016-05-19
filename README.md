# components-json-schema

## To use

#### CLI

A CLI is available to validate the schema of other `components.json` files not located in this repo.

For now, after cloning this repo, `cd` into it and run:

    npm link

Afterwards you can run this to test any file to see if it conforms to schema:

    components-json-schema path/to/components.json

## To contribute

- Clone repo and run `npm install`
- Add details to the `components.json` files in `examples`
- Update the schema at `components-schema.json`
- Run `npm test` to see if it passes

