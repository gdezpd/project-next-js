import clsx from "clsx";

import {Button} from "@/components/button/Button";
import {ItemPhotosType} from "@/pages";
import {useWindowDimensions} from "@/hook/useWindowDimensions";

import s from './pagination.module.css'

type PaginationType = {
    isLoading: boolean
    arrayData: ItemPhotosType[]
    itemsPerPage: number
    currentPage: number
    paginateHandler: (pageNumber: number) => void
    prevPadeHandler: () => void
    nextPageHandler: () => void
    onChangeHandler: (pageNumber: string, pageNumbers: number) => void
}

const Pagination = ({
                        isLoading,
                        arrayData,
                        itemsPerPage,
                        currentPage,
                        paginateHandler,
                        prevPadeHandler,
                        nextPageHandler,
                        onChangeHandler
                    }: PaginationType) => {

    const {width} = useWindowDimensions()
    const TABLET_SCREEN = 640
    let pageNumbers = []
    for (let i = 1; i <= Math.ceil(arrayData.length / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    if (isLoading) {
        return <> <h1>...Loading</h1></>
    }

    return (
        <div className={s.container}>

            <ul className={s.pagination}>
                {width <= TABLET_SCREEN ?
                    <>
                        <Button
                            variant={'primary'}
                            onClick={prevPadeHandler}
                            disabled={currentPage === 1}>
                            Prev
                        </Button>

                        {pageNumbers.map(el => {
                            return (
                                <li key={el} className={clsx(s.pageItem,
                                    {[s.active]: currentPage === el})}>
                                    <a onClick={() => paginateHandler(el)} href="#" className={s.pageLink}>{el}</a>
                                </li>
                            )
                        }).slice(currentPage - 2, currentPage + 1)}

                        <Button
                            variant={'outline'}
                            onClick={nextPageHandler}
                            disabled={currentPage === pageNumbers.length}>
                            Next
                        </Button>
                    </>
                    : <>
                        <Button
                            variant={'primary'}
                            onClick={prevPadeHandler}
                            disabled={currentPage === 1}>
                            Prev
                        </Button>

                        {pageNumbers.map(el => {
                            return (
                                <li key={el} className={clsx(s.pageItem,
                                    {[s.active]: currentPage === el})}>
                                    <a onClick={() => paginateHandler(el)} href="#" className={s.pageLink}>{el}</a>
                                </li>
                            )
                        })}

                        <Button
                            variant={'outline'}
                            onClick={nextPageHandler}
                            disabled={currentPage === pageNumbers.length}>
                            Next
                        </Button>
                    </>
                }
            </ul>
            <input
                className={s.input}
                type="number"
                onChange={(e) => onChangeHandler(e.currentTarget.value, pageNumbers.length)}
                value={currentPage}
                max={pageNumbers.length}/>
        </div>
    );
};

export default Pagination;