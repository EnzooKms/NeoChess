function asset(asset) {
  return `${config.path_public_assets}/${asset}`;
}

function old(old, property) {
  if (!old) return "";
  return old[property] ?? "";
}

function error(errors, property) {
  if (!errors) return false;
  return errors[property];
}

module.exports = {
  asset,
  old,
  error,
};
