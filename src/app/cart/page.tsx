"use client"
import styles from './page.module.css'
import { selectCart } from "@/store/slices/cart"
import { useSelector } from "react-redux"
import MovieCard from "../MovieCard"
import { IMovie } from "@/types"
import { useEffect,useState } from "react"
import instance from "@/instances/axios"
import LoadingText from "@/components/LoadingText"
import Items from './Items'
import withQueryStatus from '@/hoc/withQueryStatus'
import { useGetMoviesQuery } from '@/store/api/movies'
const ItemsWithMoviesStatus = withQueryStatus(useGetMoviesQuery)(Items)
export default function Cart(){
	
	return <ItemsWithMoviesStatus/>
}