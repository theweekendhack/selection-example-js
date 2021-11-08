const finalMark =86;
const groupProjectMark =32;
const PASSING_MARK=50;

//With the Logical AND operator the below output would be false
                                            //F
               //86        50 =T                   32             50   = F
console.log(finalMark >= PASSING_MARK     &&    groupProjectMark>=PASSING_MARK);



//With the Logical OR operator the below output would be true
                                        //T
               //86        50 =T                   32             50   = F
console.log(finalMark >= PASSING_MARK     ||    groupProjectMark>=PASSING_MARK  );