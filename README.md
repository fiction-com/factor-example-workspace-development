# Using Yarn Workspaces with Factor Development

[Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) are currently
the recommended approach to building and publishing Factor extensions.

They are useful because they make local dependencies easy and using
[Lerna](https://github.com/lerna/lerna) we can easily manage the publication and
updating of many modules at once.

## Basics

- Factor plugins need to have `factor` somewhere in their module name to allow
  Factor to auto-transpile them
- The workspaces are assigned in `package.json` under `workspaces`.
- Currently, only Yarn supports workspaces although NPM plans support in
  version 7.

## Using this Example

In this example we create two workspaces: `@apps` and `@plugins`. Plugins will
typically need an app to interact with so we've created a basic one in `@apps`
which includes the plugin `my-factor-plugin` (in the `@plugins` folder) as a
dependency.

To run the example:

```bash
#install dependencies
yarn install

# run factor inside the application
yarn workspace my-app factor dev
```

## Publishing Packages to NPM

To "go live" with your plugins and get them posted on
[Factor's plugin index](https://factor.dev/plugins) all you need to do is
publish them on NPM.

We've included [Lerna](https://github.com/lerna/lerna) to help you with this;
you'll also need an NPM account and control of the package name or
[scope](https://docs.npmjs.com/about-scopes).

To publish the workspace packages assigned in `lerna.json` you need to make sure
the packages you want to publish have `public: true` set in their
`package.json`.

Finally, when you're ready to publish run:

```back
yarn lerna publish
```

## Getting Listed on Factor

If you'd like us to list your plugin on Factor's website, please make sure you
meet the standards outlines in the
[creating plugins doc](https://factor.dev/docs/creating-plugins).

Once you've done so, email us at [factor@fiction.com](mailto:factor@fiction.com)
