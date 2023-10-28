import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './links/Links';
import ToggleButton from './toggleButton/toggleButton';
import './sidebar.scss';

type Props = {};

const Sidebar = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const variants = {
    open: (height = 1000) => ({
      clipPath: `circle(1200px at 50px 50px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at 50px 50px)',
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
      <motion.div className='bg' variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
