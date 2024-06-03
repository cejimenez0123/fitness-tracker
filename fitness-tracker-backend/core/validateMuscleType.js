const validExerciseTypes = ["CORE",
    "BICEP","TRICEP",
    "BACK",
    "CHEST",
    "LEGS",
    "SHOULDERS",
    "FULLBODY",
    "OTHER",
    "CARDIO"];


module.exports = function validateMuscleType(type) {
    if (!type === type.toUpperCase()) {
      throw new Error('Invalid Muscle type');
    }
    return type.toUpperCase();
  }