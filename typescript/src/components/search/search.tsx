// import { faSpinner } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
// import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

// import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '../Icons/Icons.tsx';
import useDebounce from './useDebounce.tsx';
// import * as searchServices from '~/services/searchService';
import './search.css';

// const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    // const inputRef = useRef();

    useEffect(() => {
        // if (!debouncedValue.trim()) {
        //     setSearchResult([]);
        //     return;
        // }

        const fetchApi = async () => {
            setLoading(true);

            // const result = await searchServices.search(debouncedValue);

            // setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        // inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    // const handleChange = (e) => {
    //     const searchValue = e.target.value;
    //     if (!searchValue.startsWith(' ')) {
    //         setSearchValue(searchValue);
    //     }
    // };

    return (
        // Using a wrapper <div> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={() => (
                    <div className='search-result'>
                        {/* <PopperWrapper> */}
                            <h4 className='search-title'>Accounts</h4>
                            {/* {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))} */}
                        {/* </PopperWrapper> */}
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className='search'>
                    <input
                        // ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        // onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className='clear' onClick={handleClear}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>
                    )}
                    {/* {loading && <FontAwesomeIcon className='loading' icon={faSpinner} />} */}

                    <button className='search-btn' onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
