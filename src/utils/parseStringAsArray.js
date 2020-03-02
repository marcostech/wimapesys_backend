module.exports = function parseStringAsArray(arrayAsStrign) {

    return arrayAsStrign.split(',').map(tech => tech.trim());

}