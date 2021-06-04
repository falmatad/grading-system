import formulas from "../../data/formulas"
import unitsWithType from "../../data/unitsWithType"

// TYPE MATCHING LOGIC: add unit of measure type to the already selected input unit
export function matchUnitType(inputUnit) {
      const selectedUnit = unitsWithType.filter((unit) => {
        return unit.value === inputUnit.selected
      })
      const matchedUnits = unitsWithType.filter((unitWithType) => {
        return selectedUnit[0]?.type === unitWithType.type
      })

      return matchedUnits[0]
}

// FORMULA LOGIC: match choosen unit of measure type and formula
export function matchFormula(input, target) {
    const final = formulas.filter(formula => {
        return formula.name === `${input.selected}_${target.selected}`
      }).map(item => {
        return item.formula.toFixed(2)
      })

    return final[0]
}
