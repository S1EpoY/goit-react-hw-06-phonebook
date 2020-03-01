import Type from './types';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(Type.ADD_CONTACT);
export const deleteContact = createAction(Type.DELETE_CONTACT);
export const getLocalContacts = createAction(Type.GET_LOCAL_CONTACTS);
export const getFilterValue = createAction(Type.FILTER_VALUE);