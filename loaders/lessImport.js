const loaderUtils = require('loader-utils');
const reduce = require('lodash/reduce');

const getFileNames = ({ files, fileName }) => {
  const index = files.indexOf(fileName);
  if (index >= 0) {
    return files.slice(0, index);
  }
  return files;
};

const addNewImports = ({ file, source, alias }) =>
  reduce(
    file,
    (existingFiles, file) => {
      // return `${existingFiles}\n @import "${alias}/${file}.less";`;
      // return `${existingFiles}\n @import "../src/less/${file}.less";`;
      return `${existingFiles}\n @import "../src/less/imports.less";`;
    },
    source,
  );

const addGlobalImports = ({ files, fileName, source, alias }) => {
  const getFiles = getFileNames({
    files,
    fileName,
  });
  return addNewImports({
    files: getFiles,
    source,
    alias,
  });
};

const lessImport = (source) => {
  const options = loaderUtils.getOptions(this);
  const fileType = loaderUtils.interpolateName(this, '[ext]', {});
  const fileName = loaderUtils.interpolateName(this, '[name]', {});
  const files = (options && options.files) || [];
  const alias = (options && options.alias) || '';

  let processedLess = source;

  if (fileType === 'less') {
    processedLess = addGlobalImports({
      files,
      fileName,
      source,
      alias,
    });
  }

  return processedLess;
};

module.exports = lessImport;