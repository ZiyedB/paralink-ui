# Paralink Network Node UI

React UI for the [paralink-node](https://github.com/paralink-network/paralink-node).

## Setup

Have npm > 5 installed

```
npm --version
```

To check your version, otherwise, you can upgrade simply

```
npm install -g npm@6.14.8
```

This is to make sure you'll have the same package-lock.json generated.

---

The project requires `node` >= 14.
Installing nvm will help you switch between different versions of node. The instructions for installing nvm are here: https://github.com/creationix/nvm

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Go to the directory of the repo where the .nvmrc file leaves and install the node version:

```
cd paralink-ui
nvm install
npm i
```

This would install the correct node version for you, and then install the dependencies

```
nvm use
```

Would use the node version specified on the current repo.

## Backend

To install backend follow the instructions in the [paralink-node repo](https://github.com/paralink-network/paralink-node).
Use:

```
docker-compose up --build
```

in the backend repo to start a headless node.

## Run

In the project directory, you can run:

`npm start`

It runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Pre-commit hooks

At commit time, some tests should be running making sure you are using the right format and tests are passing.

You can also run things manually by doing the following :

```
.git/hooks/pre-commit
```

If you encounter some issues with the hooks and they aren't triggering on commit please do the following at the root of the repo:

```
rm -rf .git/hooks
npm i
```

This should normally solve the issue.

## Tests

To run the tests simply do :

```
npm test
```

## Style Guide
[Paralink Simple Style Guide.pdf](https://github.com/paralink-network/paralink-ui/files/6045510/Paralink.Simple.Style.Guide.pdf)

## Recommendations

- Using VSCode
