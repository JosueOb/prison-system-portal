import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ListDirectors = () => {
  const navigate = useNavigate();
  const [directors, setDirectors] = useState([]);
  const token = localStorage.getItem('token');


  const getDirectors = async () => {
    try {
      const response = await axios.get(
        'https://prison-system-api.herokuapp.com/api/v1/director',
        { headers: { 'accept': 'application/json', 'authorization': token } }
      );

      setDirectors(response.data.data.users)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteDirector = async (id) => {
    try {
      // eslint-disable-next-line no-restricted-globals
      const confirmation = confirm("Are you sure?")
      if (confirmation) {
        await axios.get(
          `https://prison-system-api.herokuapp.com/api/v1/director/${id}/destroy`,
          { headers: { 'accept': 'application/json', 'authorization': token } }
        );
        await getDirectors();
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDirectors();
  }, [])

  return (
    <div>
      <h1 className='font-black text-4xl text-sky-900'>Directors</h1>
      <hr className='mt-3' />
      <p className='mt-3'>List of created directors</p>

      <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead className='bg-sky-900 text-white'>
          <tr>
            <th className='p-2'>#</th>
            <th className='p-2'>Username</th>
            <th className='p-2'>Full Name</th>
            <th className='p-2'>Email</th>
            <th className='p-2'>State</th>
            <td className='p-2'></td>
          </tr>
        </thead>
        <tbody>
          {
            directors.map((director, index) => (
              <tr key={director.id} className="border-b hover:bg-gray-100">
                <td className='p-3'>{++index}</td>
                <td className='p-3'>{director.username}</td>
                <td className='p-3'>{director.full_name}</td>
                <td className='p-3'>{director.email}</td>
                <td className='p-3'>{director.state ? 'Active' : 'Inactive'}</td>
                <td className='p-3'>
                  <button type='button' className='bg-sky-800 block w-full text-white p-2 uppercase font-bold text-xs rounded-xl'
                    onClick={() => navigate(`/directors/show/${director.id}`)}>Show</button>
                  <button type='button' className='bg-cyan-900 block w-full text-white p-2 uppercase font-bold text-xs mt-2 mb-2 rounded-xl'
                    onClick={() => navigate(`/directors/edit/${director.id}`)}>Edit</button>
                  <button type='button' className='bg-red-800 block w-full text-white p-2 uppercase font-bold text-xs rounded-xl'
                    onClick={() => { deleteDirector(director.id) }}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}
