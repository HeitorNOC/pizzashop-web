import { render } from "@testing-library/react"
import { Pagination } from "./pagination"
import userEvent from "@testing-library/user-event"

const onPageChangeCallback = vi.fn()

describe('Pagination', () => {
    it('should display the right amount of pages and result', () => {
        const wrapper = render(<Pagination pageIndex={0} totalCount={200} perPage={10} onPageChange={() => {}}/>)

        expect(wrapper.getByText('Pagina 1 de 20')).toBeInTheDocument()
        expect(wrapper.getByText('Total de 200 item(s)')).toBeInTheDocument()
    })

    it('should be able to navigate to the next page', async () => {
        const user = userEvent.setup()
        const wrapper = render(<Pagination pageIndex={0} totalCount={200} perPage={10} onPageChange={onPageChangeCallback}/>)

        const nextPageButton = wrapper.getByRole('button', {
            name: 'Próxima página'
        })


        await user.click(nextPageButton)

        expect(onPageChangeCallback).toHaveBeenCalledWith(1)
    })
})