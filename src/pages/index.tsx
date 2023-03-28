import {useState} from "react";
import Item from "@/components/item/Item";
import Pagination from "@/components/pagination/Pagination";
import {Button} from "@/components/button/Button";

export type ItemPhotosType = {
    id:number
    title: string
    url: string
}

export type ItemDescrType = {
    user: number
    id: number
    title: string
    completed: boolean
}

export default function Home() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [arrayData, setArrayData] = useState<ItemPhotosType[]>([])
    const [arrayDescr, setArrayDescr] = useState<ItemDescrType[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(6)


    const loadingHandler = () => {
        const fetchPhotos = async () => {
            setIsLoading(true)
            await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`)
                .then((response) => response.json())
                .then((json) => setArrayData(json))
        };
        const fetchDescr = async () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((response) => response.json())
                .then((json) => setArrayDescr(json))
            setIsLoading(false)
        };
        fetchPhotos()
        fetchDescr()
    }

    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = arrayData.slice(indexOfFirstItem, indexOfLastItem)
    const currentDescriptions = arrayDescr.slice(indexOfFirstItem, indexOfLastItem)

    const paginateHandler = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }
    const prevPadeHandler = () => {
        setCurrentPage(prev => prev - 1)
    }
    const nextPageHandler = () => {
        setCurrentPage(prev => prev + 1)
    }
    const onChangeHandler = (pageNumber: string, pageNumbers: number) => {
        if (+pageNumber > pageNumbers) {
            alert('Incorrect page')
        } else setCurrentPage(+pageNumber)
    }

    if (arrayData.length === 0) {
        return (
            <Button variant={'loading'} onClick={loadingHandler}>
                Loading Icons
            </Button>
        )
    }

    return (
        <>
            <Item
                arrayData={currentItems}
                arrayTodos={currentDescriptions}
            />
            <Pagination
                isLoading={isLoading}
                itemsPerPage={itemsPerPage}
                arrayData={arrayData}
                currentPage={currentPage}
                paginateHandler={paginateHandler}
                prevPadeHandler={prevPadeHandler}
                nextPageHandler={nextPageHandler}
                onChangeHandler={onChangeHandler}
            />
        </>
    )
}
