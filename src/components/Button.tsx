import { Button } from '@material-ui/core'

export const CounterButton = (props: { text: string; onClick: () => void }) => (
    <Button
        variant='contained'
        color={props.text === '+' ? 'primary' : 'secondary'}
        onClick={() => {
            props.onClick()
        }}
    >
        {props.text}
    </Button>
)
