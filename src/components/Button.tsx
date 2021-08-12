import { Button } from '@material-ui/core'

export const CounterButton = ({
    text,
    onClick,
}: {
    text: string
    onClick: (e: any) => void
}) => (
    <Button
        variant='contained'
        color={text === '+' ? 'primary' : 'secondary'}
        onClick={onClick}
    >
        {text}
    </Button>
)
