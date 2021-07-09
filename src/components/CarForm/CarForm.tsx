import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?:{}
}

interface CarState {
    make: string;
}

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore()
    const make = useSelector<CarState>(state => state.make)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if( props.id! ){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            window.location.reload()
            // event.target.reset();
        } else {
            dispatch(chooseMake(data.name))
            server_calls.create(store.getState())
            // window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name="make" placeholder='Make' />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name="model" placeholder="Model"/>
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name="year" placeholder="Year"/>
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name="price" placeholder="Price"/>
                </div>
                <div>
                    <label htmlFor="MPG">MPG</label>
                    <Input {...register('MPG')} name="MPG" placeholder="MPG"/>
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input {...register('color')} name="color" placeholder="Color"/>
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <Input {...register('weight')} name="weight" placeholder="Weight"/>
                </div>
                <div>
                    <label htmlFor="upgrades">Upgrades</label>
                    <Input {...register('upgrades')} name="upgrades" placeholder="Upgrades"/>
                </div>
                <div>
                    <label htmlFor="condition">Condition</label>
                    <Input {...register('condition')} name="condition" placeholder="Condition"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}