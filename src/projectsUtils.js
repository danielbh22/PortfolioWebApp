import axios from 'axios';

const getProjects = () =>
{
    return axios.get("http://localhost:8000/api/projects")
}

const getProject = (id) =>
{
    return axios.get("http://localhost:8000/api/projects/"+id)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getProjects, getProject};