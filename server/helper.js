function asset(asset) {
  return `${config.path_public_assets}/${asset}`;
}

function old(old, property) {
  if (!old) return "";
  return old[property] ?? "";
}

module.exports = {
  asset,
  old,
};
