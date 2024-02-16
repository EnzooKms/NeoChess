function asset(asset) {
  return `${config.path_public_assets}/${asset}`;
}

module.exports = {
  asset,
};
