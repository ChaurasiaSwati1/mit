import * as React from 'react';
import { useState } from 'react';
import {
    Avatar,
    Box,
    Button as MUIButton,
    Card as MUICard,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    // TextField,
    Typography,
    InputLabel as MUIInputLabel,
    Input as MUIInput,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

interface CommentProps {
    name: string;
    comment: string;
    date: string;
    replies?: CommentProps[];
    isReplyOpen?: boolean;
}

interface CommentSecProps {
    onCommentSubmit: (comment: string) => void;
}

const Card = styled(MUICard)({
    boxShadow: 'none',
    borderRadius: '8px',
    padding: '0',
    background: '#ffffff',
    color: '#023966',
    '& .MuiCardHeader-subheader': {
        color: '#023966',
    },
});
const RCard = styled(MUICard)({
    boxShadow: 'none',
    borderRadius: '8px',
    background: '#f5f5f5',
    color: '#023966',
    '& .MuiCardHeader-subheader': {
        color: '#023966',
    },
    '& .MuiCardContent-root': {
        padding: '0 16px 16px 74px',
    },
    '& .MuiInputBase-root': {
        marginTop: '16px',
    },
    '& .replybtn': {
        display: 'flex',
        marginLeft: 'auto',
        padding: '0',
        minWidth: 'auto',
        right: '8px',
        background: '#012440',
    },
});
const Button = styled(MUIButton)({
    background: '#012440',
});
const Input = styled(MUIInput)({
    width: '100%',
    padding: '8px 12px',
    borderRadius: '4px',
    border: '1px solid #023966',
    color: '#023966',
    fontSize: '16px',
    backgroundColor: '#ffffff',
    '&:hover': {
        '&::after': {
            display: 'none',
        },
        '&::before': {
            display: 'none',
        },
    },
    '&::after': {
        borderBottom: '0',
        display: 'none',
    },
    '&::before': {
        borderBottom: '0',
        display: 'none',
    },
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
    '&.error': {
        border: '1px solid red',
    },
});

const InputLabel = styled(MUIInputLabel)({
    textAlign: 'start',
    color: '#023966',
    fontWeight: '600',
    fontSize: '16px',
    marginBottom: '8px',
    '@media (max-width: 991.98px)': {
        fontSize: '14px',
    },
});

const CommentSec: React.FC<CommentSecProps> = ({ onCommentSubmit }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCommentSubmit(comment);
        setComment('');
    };

    return (
        <Card>
            <CardContent sx={{ p: 0 }}>
                <form onSubmit={handleSubmit}>
                    <InputLabel htmlFor="comment-input">Comments</InputLabel>
                    {/* <TextField
                        id="comment-input"
                        label="Add a comment..."
                        multiline
                        rows={4}
                        fullWidth
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    /> */}
                    <Input
                        id="comment-input"
                        placeholder="Add a comment..."
                        multiline
                        rows={4}
                        fullWidth
                        required={true}
                        value={comment}
                        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
                            setComment(e.target.value)
                        }
                    />
                    <CardActions sx={{ px: 0 }}>
                        <Button type="submit" variant="contained" color="primary">
                            Comment
                        </Button>
                    </CardActions>
                </form>
            </CardContent>
        </Card>
    );
};

const Comment: React.FC<CommentProps> = ({ name, comment, date, replies, isReplyOpen }) => {
    const [replyComment, setReplyComment] = useState('');
    const [isReplyVisible, setIsReplyVisible] = useState(isReplyOpen || false);
    const [newReplies, setNewReplies] = useState<CommentProps[]>(replies || []);

    const handleReplySubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newReply = {
            name: 'Jane Doe', // Replace with actual user name
            comment: replyComment,
            date: new Date().toLocaleDateString(),
        };
        setNewReplies([...newReplies, newReply]);
        setReplyComment('');
    };

    return (
        <RCard>
            <CardHeader
                avatar={<Avatar alt={name} src="https://mui.com/static/images/avatar/1.jpg" />}
                title={name}
                subheader={date}
                action={
                    <Button
                        type="button"
                        variant="contained"
                        color="primary"
                        className="replybtn"
                        onClick={() => setIsReplyVisible(!isReplyVisible)}
                    >
                        <ReplyOutlinedIcon />
                    </Button>
                }
            />
            <CardContent>
                <Typography variant="body1">{comment}</Typography>
                {/* <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    className="replybtn"
                    onClick={() => setIsReplyVisible(!isReplyVisible)}
                    >
                    Reply
                    </Button> */}
                {isReplyVisible && (
                    <form onSubmit={handleReplySubmit}>
                        <Input
                            id="reply-input"
                            placeholder="Add a reply..."
                            multiline
                            rows={2}
                            fullWidth
                            required={true}
                            value={replyComment}
                            onChange={(e) => setReplyComment(e.target.value)}
                        />
                        <Button type="submit" variant="contained" color="primary" sx={{ mt: 1 }}>
                            Submit
                        </Button>
                    </form>
                )}
            </CardContent>
            {newReplies.length > 0 && (
                <CardContent>
                    {newReplies.map((reply, index) => (
                        <Comment
                            key={index}
                            name={reply.name}
                            comment={reply.comment}
                            date={reply.date}
                            replies={reply.replies}
                        />
                    ))}
                </CardContent>
            )}
        </RCard>
    );
};

const CommentForm: React.FC = () => {
    const [comments, setComments] = useState<CommentProps[]>([]);

    const handleCommentSubmit = (comment: string) => {
        const newComment = {
            name: 'Jane Doe', // Replace with actual user name
            comment,
            date: new Date().toLocaleDateString(),
        };
        setComments([...comments, newComment]);
    };

    return (
        <Box>
            <CommentSec onCommentSubmit={handleCommentSubmit} />
            <Grid container spacing={2}>
                {comments.map((comment, index) => (
                    <Grid item key={index} xs={12} md={12}>
                        <Comment {...comment} />
                    </Grid>
                ))}
            </Grid>
            {/* <Button variant="outlined" sx={{ mt: 2 }}>
                Load More
            </Button> */}
        </Box>
    );
};

export default CommentForm;
