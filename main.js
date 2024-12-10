/* This was a Codecademy challenge within the full stack engineer career path */
// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  // Factory function
  const usedSpecimenNumbers = new Set();
  
  const pAequorFactory = (specimenNum, dna) => {
    if (usedSpecimenNumbers.has(specimenNum)) {
      throw new Error('Specimen number already used');
    }
    usedSpecimenNumbers.add(specimenNum);
    return {
      // Create object
      _specimenNum: specimenNum,
      _dna: dna,
  
      // Getter & Setter
      get specimenNum() {
        return this._specimenNum;
      },
  
      set specimenNum(newSpecimenNum) {
        this._specimenNum = newSpecimenNum;
      },
  
      get dna() {
        return this._dna;
      },
  
      set dna(newDna) {
        this._dna = newDna;
      },
  
      // Functions
      mutate() {
        let num = Math.floor(Math.random() * 15);
        if (this._dna[num] === 'A') {
          let num2 = Math.floor(Math.random() * 3);
          this._dna[num] = ['T', 'C', 'G'][num2];
        } else if (this._dna[num] === 'T') {
          let num2 = Math.floor(Math.random() * 3);
          this._dna[num] = ['A', 'C', 'G'][num2];
        } else if (this._dna[num] === 'C') {
          let num2 = Math.floor(Math.random() * 3);
          this._dna[num] = ['A', 'T', 'G'][num2];
        } else if (this._dna[num] === 'G') {
          let num2 = Math.floor(Math.random() * 3);
          this._dna[num] = ['A', 'T', 'C'][num2];
        }
      },
      compareDNA(ae2) {
        let commonality = 0;
        let total = (this._dna.length + ae2._dna.length) / 2;
        for (let i = 0; i < total; i++) {
          if (this._dna[i] === ae2.dna[i]) {
            commonality++;
          }
        }
        let com = (commonality / total) * 100;
        com = com.toFixed(1);
        return 'specimen #1 and specimen #2 have ' + com + '% DNA in common';
      },
      willLikelySurvive() {
        let good = 0;
        let total = this._dna.length;
        for (const i of this._dna) {
          if (i === 'C' || i === 'G') {
            good++;
          }
        }
        const survive = good / total;
        if (survive >= 0.6) {
          return true;
        } else {
          return false;
        }
      },
    };
  };
  // Creation method
  const creation = num1 => {
    let done = 0;
    let arr = [];
    let i = 1;
    while (done < num1) {
      let newOrganism = pAequorFactory(i, mockUpStrand());
      i++;
      if (newOrganism.willLikelySurvive()) {
        arr.push(newOrganism);
        done++;
      }
    }
    return arr;
  }
  /*// Testing
  // Create a new organism
  let organism1 = pAequorFactory(1, mockUpStrand());
  let organism2 = pAequorFactory(2, mockUpStrand());
  // Log the initial DNA
  console.log('Initial DNA:', organism1.dna);
  
  // Mutate the organism's DNA
  organism1.mutate();
  
  // Log the mutated DNA
  console.log('Mutated DNA:', organism1.dna);
  console.log('Initial DNA:', organism2.dna);
  // Compare org1 & org2
  console.log(organism1.compareDNA(organism2));
  
  // Test willLikelySurvive
  console.log(organism1.willLikelySurvive());
  console.log(organism2.willLikelySurvive());
  */
  
  // Testing for creation method 
  let study = creation(30);
  // reduce result array to just the two items without the methods, getters and setters
  let simplifiedStudy = study.map(organism => ({
    specimenNum: organism.specimenNum,
    dna: organism.dna
  }));
  
  console.log(simplifiedStudy);
  
  
  
  
  