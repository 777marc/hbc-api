module.exports = (req, res, next) => {
    console.log('in logger middleware:', req.params);
	return next();
};