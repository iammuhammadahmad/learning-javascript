car = (manufecturer, model, ...args)=>{
    // let {color, feature} = [...args]
    let [color, feature] = [...args]
    return {
        manufecturer: manufecturer,
        model: model,
        color: color,
        feature: feature
    }
}

console.log(car("Ahmad", "Honda 125", "Red", "Five Gear"))