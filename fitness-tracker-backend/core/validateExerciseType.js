const validExerciseTypes = ['BARBELL', 'DUMBBELL', 'MACHINE', 'WEIGHTED', 'ASSISTEDWEIGHT', 'CALISTHENICS', 'CARDIO', 'DURATION'];


module.exports = function validateExerciseType(type) {
  console.log(type);
    if (!type===type.toUpperCase()) {
      throw new Error('Invalid Exercise type');
    }
    return type.toUpperCase();
  }

