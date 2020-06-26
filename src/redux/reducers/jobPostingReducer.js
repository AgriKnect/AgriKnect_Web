const jobPostingReducer = (state = {
    jobTitle: '',
    jobDescription: '',
    jobType: '',
    startDate: '',
    endDate: '',
    skills: [],
    equipment: [],
    brands: [],
    housingProvided: '',
    housingDetails: '',
    reloationProvided: '', 

}, action) => {
    if (action.type === 'SET_JOB_TITLE') {
        console.log(action.payload);
        return {...state, title: action.payload}
    } else if (action.type === 'SET_JOB_DESCRIPTION') {
        console.log(action.payload);
        return { ...state, jobDescription: action.payload }
    } else if (action.type === 'SET_JOB_TYPE') {
        console.log(action.payload);
        return { ...state, jobType: action.payload }
    } else if (action.type === 'SET_START_DATE') {
        return { ...state, startDate: action.payload }
    } else if (action.type === 'SET_END_DATE') {
        return { ...state, endDate: action.payload }
    } else if (action.type === 'SET_JOB_SKILLS') {
        if (state.skills.indexOf(action.payload) < 0) {
        return {...state, skills: [...state.skills, action.payload]}
        } else {
              let filteredSkills = state.skills.filter(skill => {
               return skill !== action.payload
            })
           return {...state, skills: filteredSkills}
        }
        

    } else if (action.type === 'SET_JOB_EQUIPMENT') {
        console.log('HEREHEREHERE')
        if (state.equipment.indexOf(action.payload) < 0) {
            console.log('in if')
            return { ...state, equipment: [...state.equipment, action.payload] }
        }  else {
            console.log('in else')
            let filteredEquipment = state.equipment.filter(skill => {
                return skill !== action.payload
            })
            return { ...state, equipment: filteredEquipment } }
    } else if (action.type === 'SET_JOB_BRAND') {
            console.log('HEREHEREHERE')
        if (state.brands.indexOf(action.payload) < 0) {
            console.log('in if')
            return { ...state, brands: [...state.brands, action.payload] }
        }  else {
            console.log('in else')
            let filteredBrands = state.brands.filter(brand => {
                return brand !== action.payload
            })
            return { ...state, brands: filteredBrands }
    } 


} else {
        return state
    }

}

export default jobPostingReducer;