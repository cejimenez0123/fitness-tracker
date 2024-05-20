const validExerciseTypes = ['BARBELL', 'DUMBBELL', 'MACHINE', 'WEIGHTED', 'ASSISTEDWEIGHT', 'REPS', 'CARDIO', 'DURATION'];


module.exports = function validateExerciseType(type) {
    if (!validExerciseTypes.includes(type.toUpperCase())) {
      throw new Error('Invalid Exercise type');
    }
    return type.toUpperCase();
  }

