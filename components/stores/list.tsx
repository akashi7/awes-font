import { store } from '@/lib/api/stores/storesEndpoints'
import { FC } from 'react'
import GlobalImage from '../common/image/globalImage'

interface ListProps {
  stores: Array<store> | undefined
}

const List: FC<ListProps> = ({ stores }) => {
  return (
    <>
      {stores?.map((storeObj: store, index: number) => {
        return (
          <div className='flex justify-between items-center mb-5' key={index}>
            <section className='flex flex-row items-center gap-5'>
              <GlobalImage
                src={storeObj.image || '/icons/icon1.svg'}
                width={60}
                height={60}
                className=' rounded-[16px]'
              />
              <div>
                <p className='text-[#1C2834]  text-[14px] font-medium'>
                  {storeObj.name}
                </p>
                <p className='font-[300] text-[12px]  text-[#495D69]'>
                  134 Products
                </p>
              </div>
            </section>
            <GlobalImage src='/icons/downy.svg' />
          </div>
        )
      })}
    </>
  )
}

export default List
