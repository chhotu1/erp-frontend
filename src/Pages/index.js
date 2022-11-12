import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Dashboard } from '../Components';
import { dashboardResults } from '../store/Slices/cashbookSlice';
const Pages = () => {
  const dispatch = useDispatch();
  const { dashboard } = useSelector((state) => ({ ...state.cashbook }))

  const dashbordData = useCallback(() => {
    dispatch(dashboardResults({}));
  }, [dispatch])

  useEffect(() => {
    dashbordData()
  }, [dashbordData])

  return (
    <div>
      <Dashboard dashboard={dashboard} />
    </div>
  )
}

export default Pages
