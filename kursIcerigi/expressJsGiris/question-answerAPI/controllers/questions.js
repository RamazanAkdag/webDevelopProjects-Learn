const getAllQuestions = (req, res, next) => {
  res
    .status(200) //http kodunu istediğimiz şekilde döndürebiliyoruz
    .json({
      success: true,
    });
};

module.exports = {
  getAllQuestions,
};
