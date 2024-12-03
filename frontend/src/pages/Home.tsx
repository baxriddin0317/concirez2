import React, { useState } from 'react'
import { PlusIcon } from '../icons'
import Table from '../components/Table'
import Analytics from '../components/Analytics'
import RecentCompleted from '../components/RecentCompleted'
import CreateTaskModal from '../components/CreateTaskModal'

const Home = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <>
      <header className='flex items-center justify-between text-white pt-8 mb-8'>
        <div className='flex items-center gap-2'>
          <h1 className='text-3xl font-medium'>Tasks</h1>
          <p className='text-lg tracking-wide mt-px'>(20 Tasks)</p>
        </div>
        <button onClick={handleOpen} className='h-11 flex items-center gap-2.5 rounded-lg bg-brand-main text-white font-bold px-4'>
          <PlusIcon />
          <span>Create New Task</span>
        </button>
        <CreateTaskModal isOpen={isOpen} onClose={handleClose} />
      </header>

      <div className='flex items-start justify-between flex-col-reverse lg:flex-row gap-6 lg:gap-8'>
        <Table />
        <div className='space-y-6 lg:space-y-8 lg:max-w-[520px] w-full lg:pt-14'>
          <Analytics />
          <RecentCompleted />
        </div>
      </div>
      <div className="sticky h-6 w-full bottom-0 left-0 bg-bottom"></div>
    </>
  )
}

export default Home