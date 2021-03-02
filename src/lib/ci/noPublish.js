if (!process.env["ZENITH_DEPLOY"]) {
  console.log("Please use `npm run deploy` to publish the package");
  process.exit(1);
}
