export const createProject = (project) => {
    return(dispatch, getState, { getFirebase, getFirestore }) => {
        //make acync call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Mukesh',
            authorLastName: 'Sihag',
            authorId: 1,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', project});
        })
    }
};