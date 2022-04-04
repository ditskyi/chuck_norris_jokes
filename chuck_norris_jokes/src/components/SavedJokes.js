import React, { useCallback, useMemo, useState } from 'react';
import Row from './Row';
import { useSelector } from 'react-redux';
import { TiArrowUnsorted, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';

const SORT_TYPES = {
  asc: 'asc',
  dsc: 'dsc',
  noSort: 'noSort',
};

const SavedJokes = () => {
  const savedJokes = useSelector(state => state.jokes.savedJokes);
  const [category, setCategory] = useState('');
  const [sortByDate, setSortByDate] = useState(SORT_TYPES.noSort);

  const handleSortClick = useCallback(() => {
    if (sortByDate === SORT_TYPES.noSort) {
      setSortByDate(SORT_TYPES.asc)
    }
    if (sortByDate === SORT_TYPES.asc) {
      setSortByDate(SORT_TYPES.dsc)
    }
    if (sortByDate === SORT_TYPES.dsc) {
      setSortByDate(SORT_TYPES.noSort)
    }
  }, [sortByDate])

  const sortedAndFilteredSavedJokes = useMemo(() => {

    const newSavedJokes = [...savedJokes].filter((joke) =>
      category === '' ? joke : joke.categories === category
    )
    return newSavedJokes.sort((a, b) => {
      if (sortByDate === SORT_TYPES.asc) {
        return a.receivedTime - b.receivedTime
      }
      if (sortByDate === SORT_TYPES.dsc) {
        return b.receivedTime - a.receivedTime
      }
      return newSavedJokes
    })

  }, [savedJokes, sortByDate, category])

  const setOfCategories = useMemo(() => {
    const categories = savedJokes.map((joke) => joke.categories)
    return [...new Set(categories)]
  }, [savedJokes])

  const handleCategoryClick = useCallback((event) => {
    setCategory(event.target.value)
  },[category])

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th className='col'>
            <select onChange={handleCategoryClick} >
              <option value="">All</option>
              {setOfCategories.map((value) =>
                <option key={value} value={value}>{value}</option>
              )}
            </select>
          </th>
          <th className='col' >
            <span className='ps-1' onClick={handleSortClick}>
              Received Time
              {sortByDate === SORT_TYPES.noSort && <TiArrowUnsorted />}
              {sortByDate === SORT_TYPES.asc && <TiArrowSortedDown />}
              {sortByDate === SORT_TYPES.dsc && <TiArrowSortedUp />}
            </span>
          </th>
          <th className='col'></th>
          <th className='col'></th>
        </tr>
      </thead>
      <tbody>
        {sortedAndFilteredSavedJokes.map((joke) => <Row joke={joke} key={joke.id} />)}
      </tbody>
    </table>
  )
};

export default SavedJokes;
